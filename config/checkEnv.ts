/**
 * @template {string} T - Verifica valor de env
 * @param {string | undefined} value - Valor a ser verificado no array
 * @param {readonly T[]} allowed - Array para verificar a existência de valor
 * @param {string} name - nome da váriavel a ser verificada
 */
export function validateEnvVar(value:string, allowed:Array<string>, name:string):void {
  //@ts-ignore
  if (!allowed.includes(value)) {
    throw new Error(`[ERROR] Inválido ${name}: "${value}". Deve ser um dos Valores: ${allowed.join(", ")}`);
  }
}