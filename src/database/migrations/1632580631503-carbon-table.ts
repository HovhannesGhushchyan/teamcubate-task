import { MigrationInterface, QueryRunner } from 'typeorm';

export class carbon1632580631503 implements MigrationInterface {
  name = 'carbon1632580631503';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "carbon" ("id" integer NOT NULL, "country" character varying NOT NULL, "status" AS ENUM('live', 'draft', 'archived', 'awaiting'), CONSTRAINT "PK_643351c218af18a84dec262e908" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "PK_643351c218af18a84dec262e908"`);
    await queryRunner.query(`DROP TABLE "carbon"`);
  }
}
