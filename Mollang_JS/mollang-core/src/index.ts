import parse from "./parse";
import run from "./runtime";
import exitMessage from "./exit";

/**
 * Mollang 실행
 * @param code 실행할 Mollang 코드
 * @param maxRecursion GOTO 반복 최대 가능 횟수 (100000)
 * @param outputFn 시스템 출력 함수 (string 전달)
 * @param errorFn 시스템 오류 함수 ([number, string] 전달)
 * @param inputFn 사용자 입력 함수 (string 반환)
 * @returns [출력, 오류 코드, 오류, 파싱 결과]
 */
export default function main(
    code: string,
    options: {
        maxRecursion?: number;
        outputFn?: (msg: string) => void;
        errorFn?: (code: number, msg: string) => void;
        inputFn: () => string;
    }
) {
    const { maxRecursion = 100000, outputFn, errorFn, inputFn } = options;

    code = code
        .split("\n")
        .map((line: string) => line.trim())
        .join("\n");

    const outputs: string[] = [];
    const errorCodes: number[] = [];
    const errors: string[] = [];

    const parsed = parse(code, (...args) => {
        const [code, msg] = exitMessage(...args);
        errorFn && errorFn(code, msg);
        errorCodes.push(code);
        errors.push(msg);
    });
    run(
        maxRecursion,
        (msg) => {
            outputFn && outputFn(msg);
            outputs.push(msg.toString());
        },
        (...args) => {
            let [code, msg] = exitMessage(...args);
            errorFn && errorFn(code, msg);
            errorCodes.push(code);
            errors.push(msg);
        },
        inputFn,
        ...parsed
    );
    return [outputs, errorCodes, errors, parsed];
}