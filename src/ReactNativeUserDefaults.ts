export default class UserDefaults {
  static standard = new UserDefaults();
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(_suiteName?: string) {}
  async get(_forKey: string): Promise<any> {}
  async set(_forKey: string, _value: any): Promise<void> {}
  async remove(_forKey: string): Promise<void> {}
  async getAll(): Promise<any> {}
  async removeAll(): Promise<void> {}
}
