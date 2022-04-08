import { MigrationInterface, QueryRunner } from "typeorm"

export class PostRefactoringTIMESTAMP implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name:"categories",
            columns: [
              {name: "id", type: "uuid", isPrimary: "true"},
              {name: "name", type: "varchar", isUnique: true,
              {name: "description", type: "varchar"},
              {name: "create_at", type: "timestamp", default: "now()"},
            ]
          })
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE categories `,
        ) // reverts things made in "up" method
    }
}