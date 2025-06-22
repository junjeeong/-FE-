interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface SignInPayload {
  username: string;
  password: string;
}

export type SignInResponse = TokenPair;

export interface SignUpPayload {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export type RefreshTokenResponse = TokenPair;
