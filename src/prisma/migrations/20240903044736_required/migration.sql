/*
  Warnings:

  - Made the column `calorie` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `protein` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "calorie" SET NOT NULL,
ALTER COLUMN "calorie" SET DEFAULT 2000,
ALTER COLUMN "protein" SET NOT NULL,
ALTER COLUMN "protein" SET DEFAULT 60;
