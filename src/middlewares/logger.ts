import type { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // リクエストURLと時刻をログ出力
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // 次のミドルウェアまたはルートハンドラへ処理を渡す
  next();
};
