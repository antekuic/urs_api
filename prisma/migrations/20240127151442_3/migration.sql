/*
  Warnings:

  - You are about to drop the column `date` on the `Lecture` table. All the data in the column will be lost.
  - Added the required column `salt` to the `Classroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Lecture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "salt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lecture" DROP COLUMN "date",
ADD COLUMN     "end_date" TIMESTAMPTZ,
ADD COLUMN     "start_date" TIMESTAMPTZ NOT NULL;
