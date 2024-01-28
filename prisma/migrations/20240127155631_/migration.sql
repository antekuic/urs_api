/*
  Warnings:

  - The primary key for the `Classroom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Classroom` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(512)`.
  - You are about to alter the column `class_id` on the `Lecture` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(512)`.
  - Added the required column `salt` to the `Lecture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lecture" DROP CONSTRAINT "Lecture_class_id_fkey";

-- AlterTable
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(512),
ADD CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Lecture" ADD COLUMN     "salt" VARCHAR(512) NOT NULL,
ALTER COLUMN "class_id" SET DATA TYPE VARCHAR(512);

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
