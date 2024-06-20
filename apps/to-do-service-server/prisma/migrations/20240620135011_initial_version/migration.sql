/*
  Warnings:

  - The primary key for the `List` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `List` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `listId` column on the `Note` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `title` on table `List` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "EnumListStatus" AS ENUM ('InProgress', 'Done', 'NotStarted');

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_listId_fkey";

-- AlterTable
ALTER TABLE "List" DROP CONSTRAINT "List_pkey",
ADD COLUMN     "status" "EnumListStatus",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ADD CONSTRAINT "List_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "listId",
ADD COLUMN     "listId" INTEGER;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
