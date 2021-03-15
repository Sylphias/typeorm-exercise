import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1615809320352 implements MigrationInterface {
    name = 'firstMigration1615809320352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "teamName" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "projectName" character varying NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_teams_team" ("userId" integer NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_da60f131c39079373054fd8ed07" PRIMARY KEY ("userId", "teamId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5b1d47a221406321be714a8186" ON "user_teams_team" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a80f8ae0d425218dbaa2240df4" ON "user_teams_team" ("teamId") `);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_d0474b642dc0ae63660dd8e2ac0" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_teams_team" ADD CONSTRAINT "FK_5b1d47a221406321be714a8186d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_teams_team" ADD CONSTRAINT "FK_a80f8ae0d425218dbaa2240df49" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_teams_team" DROP CONSTRAINT "FK_a80f8ae0d425218dbaa2240df49"`);
        await queryRunner.query(`ALTER TABLE "user_teams_team" DROP CONSTRAINT "FK_5b1d47a221406321be714a8186d"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_d0474b642dc0ae63660dd8e2ac0"`);
        await queryRunner.query(`DROP INDEX "IDX_a80f8ae0d425218dbaa2240df4"`);
        await queryRunner.query(`DROP INDEX "IDX_5b1d47a221406321be714a8186"`);
        await queryRunner.query(`DROP TABLE "user_teams_team"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
