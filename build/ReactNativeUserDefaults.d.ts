export default class UserDefaults {
    static standard: UserDefaults;
    constructor(_suiteName?: string);
    get(_forKey: string): Promise<any>;
    set(_forKey: string, _value: any): Promise<void>;
    remove(_forKey: string): Promise<void>;
    getAll(): Promise<any>;
    removeAll(): Promise<void>;
}
//# sourceMappingURL=ReactNativeUserDefaults.d.ts.map