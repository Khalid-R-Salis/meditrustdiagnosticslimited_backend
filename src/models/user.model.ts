import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export enum Roles { 
  receptionist = 'receptionist', 
  technician = 'technician',
  admin = 'admin'
}

interface UserInterface extends Document {
  fullName: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
}

const userSchema = new Schema<UserInterface>({
  fullName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: [Roles.receptionist, Roles.technician, Roles.admin],
    default: Roles.receptionist
  }
}, { timestamps: true });

const User = model<UserInterface>('User', userSchema);
export default User;

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});