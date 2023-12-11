class Logger {
  private static instance: Logger | null = null;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`Logging: ${message}`);
  }
}

const loggerInstance1 = Logger.getInstance();
const loggerInstance2 = Logger.getInstance();

// Один и тот же объект
console.log(loggerInstance1 === loggerInstance2);

loggerInstance1.log('Error: Something went wrong');
loggerInstance2.log('Info: Application started');
