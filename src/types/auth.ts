export interface SignInPayload {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpPayload {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
