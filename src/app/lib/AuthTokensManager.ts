import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthTokensManager {
  private static KEY = '@foodiary:auth-tokens';

  static async save(tokens: AuthTokensManager.Tokens) {
    await AsyncStorage.setItem(this.KEY, JSON.stringify(tokens));
  }

  static async load(): Promise<AuthTokensManager.Tokens | null> {
    try {
      const tokensString = await AsyncStorage.getItem(this.KEY);

      if (!tokensString) {
        return null;
      }

      return JSON.parse(tokensString);
    } catch {
      return null;
    }
  }

  static async clear() {
    await AsyncStorage.removeItem(this.KEY);
  }
}

export namespace AuthTokensManager {
  export type Tokens = {
    accessToken: string;
    refreshToken: string
  };
}
