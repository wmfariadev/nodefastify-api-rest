-- CreateTable
CREATE TABLE "Book" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "decription" TEXT,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "isReading" BOOLEAN NOT NULL DEFAULT false,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
