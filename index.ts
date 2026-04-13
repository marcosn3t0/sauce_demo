import { spawnSync } from 'child_process'
import { validateEnvVar } from './config/checkEnv'

validateEnvVar(process.env.ENV as string, ['stg', 'qa', 'dev'], 'ENV')

const args = process.argv.slice(2)

const workers = process.env.WORKERS ? parseInt(process.env.WORKERS, 10) : 1

const buildCommandArgs = (): string[] => {
  return [
    'playwright',
    'test',
    `--workers=${workers}`,
    '--config=playwright.config.ts',
    ...args
  ]
}

const runCommands = (): void => {
  const commandArgs = buildCommandArgs()

  console.info(`[INFO] Running: npx ${commandArgs.join(' ')}`)

  const result = spawnSync('npx', commandArgs, {
    stdio: 'inherit',
    shell: true
  })

  if (result.status !== 0) {
    console.log(result);
    console.error(`[ERROR] Test command failed with exit code: ${result.status}`)
    process.exit(result.status ?? 1)
  }
}

runCommands()