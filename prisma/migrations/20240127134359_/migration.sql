/*
  Warnings:

  - Added the required column `class_id` to the `Lecture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lecture" ADD COLUMN     "class_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
