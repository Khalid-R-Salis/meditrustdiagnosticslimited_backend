import { z } from 'zod';

export const registerUser = z.object({
  fullName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  role: z.string(),
  password: z.string().min(8)
});

export const loginUser = z.object({
  email: z.string().email(),
  role: z.string(),
  password: z.string().min(8)
});

export const forgotPassword = z.object({
  email: z.string().email(),
});

export const resetUserPassword = z.object({ 
  newPassword: z.string().min(8),
  password: z.string().min(8) 
});