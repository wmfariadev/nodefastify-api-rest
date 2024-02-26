/*
  Warnings:

  - You are about to drop the column `decription` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT;
