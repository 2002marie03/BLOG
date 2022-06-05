-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'AUTHOR', 'USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `Utilisateur_email_key`(`email`),
    UNIQUE INDEX `Utilisateur_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NULL,
    `creatdDT` DATETIME(3) NOT NULL,
    `updateDt` DATETIME(3) NOT NULL,
    `published` BOOLEAN NOT NULL,
    `categorieId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorie` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `email` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `artcleId` INTEGER NULL,

    UNIQUE INDEX `comment_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Utilisateur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `categorie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_artcleId_fkey` FOREIGN KEY (`artcleId`) REFERENCES `article`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
