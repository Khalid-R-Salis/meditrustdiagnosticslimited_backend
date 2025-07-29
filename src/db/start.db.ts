import mongoose from "mongoose";
import AppLanguage from "../constants/app.language";

const startDB = async (uriString: string | undefined) => {
  if (uriString?.trim().length === 0 || !uriString) {
    throw new Error(AppLanguage.connectionStringEmpty);
  }

  try {
    await mongoose.connect(uriString);
    console.log(AppLanguage.databaseConnected);
  } catch (error) {
    throw error;
  }
}

export default startDB;