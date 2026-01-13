import { TestProcedure } from "../types";

/**
 * AI generation is disabled in fully offline mode.
 * All tests are now provided by the local verified database.
 */
const generateTestProcedure = async (foodName: string, adulterantName: string): Promise<TestProcedure | null> => {
  console.warn("AI Generation is disabled. Use the local database.");
  return null;
};

export { generateTestProcedure };
