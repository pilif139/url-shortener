/*
  Warnings:

  - You are about to drop the column `slug` on the `Url` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Url_slug_key";

-- AlterTable
ALTER TABLE "Url" DROP COLUMN "slug";
