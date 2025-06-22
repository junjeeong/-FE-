export interface SignInPayload {
  username: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}
