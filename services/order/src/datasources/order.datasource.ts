import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
// import {juggler} from '@loopback/repository';
import { SequelizeDataSource } from '@loopback/sequelize';

export const config = {
  name: 'order',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'demoDB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OrderDataSource extends SequelizeDataSource
  implements LifeCycleObserver {
  static dataSourceName = 'order';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.order', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
