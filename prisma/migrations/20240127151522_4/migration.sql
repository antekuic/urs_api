/*
  Warnings:

  - You are about to alter the column `salt` on the `Classroom` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(512)`.

*/
-- AlterTable
ALTER TABLE "Classroom" ALTER COLUMN "salt" SET DATA TYPE VARCHAR(512);
