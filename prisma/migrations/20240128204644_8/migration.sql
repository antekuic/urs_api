/*
  Warnings:

  - A unique constraint covering the columns `[user_id,lecture_id]` on the table `Attends` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Attends_user_id_lecture_id_key" ON "Attends"("user_id", "lecture_id");
