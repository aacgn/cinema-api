import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMovieTable1557879678963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE 'movie' ('id' SERIAL NOT NULL, 'name' character varying(500) NOT NULL, 'description' text NOT NULL, CONSTRAINT 'PK_cb3bb4d61cf764dc035cbedd422' PRIMARY KEY ('id'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE 'movie'`);
    }

}
