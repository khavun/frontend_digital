import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@/modules/singin/services/authService';

interface AuthState {
  email: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.login(email, password); // Call the service
      return response; // The returned value will be passed to `fulfilled` case
    } catch (error: any) {
      return rejectWithValue(error.message); // Pass the error to `rejected` case
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<{ email: string }>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.email = action.payload.email;
      })
      .addCase(loginAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions; // Export actions for use in components
export default authSlice.reducer; // Export the reducer for the store

