export interface SiteInfo {
  id: number;
  ip: string;
  errno: number;
  errstr: string;
}

export interface SiteRequest {
  id: number;
  host: string;
  port: number;
  timeout: number;
  expect_open: boolean;
  info?: SiteInfo;
}