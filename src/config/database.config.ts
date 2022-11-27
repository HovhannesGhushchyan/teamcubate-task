import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export default (): TypeOrmModuleOptions =>
  process.env.NODE_ENV === 'test'
    ? {
        type: 'postgres',
        host: process.env.TEST_DB_HOST,
        port: parseInt(process.env.TEST_DB_PORT),
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        logging: false,
        dropSchema: true,
        migrationsRun: false,
        synchronize: true,
        migrations: [
          join(__dirname, '../', '/database/migrations/**/*{.ts,.js}'),
        ],
        migrationsTableName: 'migrations',
        entities: [join(__dirname, '../', '/**/*.entity{.ts,.js}')],
        namingStrategy: new SnakeNamingStrategy(),
        keepConnectionAlive: true,
      }
    : {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [join(__dirname, '../', '/**/*.entity{.ts,.js}')],
        logging: process.env.ORM_LOGGING === 'true',
        synchronize: true,
        migrationsTableName: 'migrations',
        namingStrategy: new SnakeNamingStrategy(),
        migrationsRun: false,
        migrations: [
          join(__dirname, '../', '/database/migrations/**/*{.ts,.js}'),
        ],
      };

class SnakeNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(className: string, customName: string): string {
    return customName ? customName : snakeCase(className);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return (
      snakeCase(embeddedPrefixes.concat('').join('_')) +
      (customName ? customName : snakeCase(propertyName))
    );
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(relationName + '_' + referencedColumnName);
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
  ): string {
    return snakeCase(
      firstTableName +
        '_' +
        firstPropertyName.replace(/\./gi, '_') +
        '_' +
        secondTableName,
    );
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName?: string,
  ): string {
    return snakeCase(
      tableName + '_' + (columnName ? columnName : propertyName),
    );
  }

  classTableInheritanceParentColumnName(
    parentTableName: any,
    parentTableIdPropertyName: any,
  ): string {
    return snakeCase(parentTableName + '_' + parentTableIdPropertyName);
  }

  eagerJoinRelationAlias(alias: string, propertyPath: string): string {
    return alias + '__' + propertyPath.replace('.', '_');
  }
}
