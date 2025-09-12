export interface SiteInfo {
  id: number;
  name: string;
  port: number;
  should_fail: boolean;
  should_succeed: boolean;
  success?: boolean;
  checked?: string;
  photo?: string;
}