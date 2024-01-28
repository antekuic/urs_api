-- CreateTable
CREATE TABLE "Attends" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "lecture_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attends_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attends" ADD CONSTRAINT "Attends_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attends" ADD CONSTRAINT "Attends_lecture_id_fkey" FOREIGN KEY ("lecture_id") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
