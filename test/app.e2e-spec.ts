import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ConfigModule } from '@nestjs/config';
import {
  runSeeder,
  tearDownDatabase,
  useRefreshDatabase,
  useSeeding,
} from 'typeorm-seeding';
import UserCarbonSeed from '../src/database/seeds/userCarbon.seed';
import UserSeed from '../src/database/seeds/user.seed';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ConfigModule.forRoot()],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    await useRefreshDatabase({
      configName: 'src/database/connectionExport.ts',
    });
    await useSeeding({
      configName: 'src/database/connectionExport.ts',
    });

    await runSeeder(UserSeed);
    await runSeeder(UserCarbonSeed);
  });

  it('should log in', async () => {
    const response = await login(app);
    expect(response.body.accessToken).toBeTruthy();
  });

  it('should get certificates of current user', async () => {
    let response = await login(app);
    const accessToken = response.body.accessToken;
    response = await request(app.getHttpServer())
      .get('/users/certificates')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(response.body).toBeTruthy();
  });

  it('should get all available certificates', async () => {
    let response = await login(app);
    const accessToken = response.body.accessToken;
    response = await request(app.getHttpServer())
      .get('/carbon')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(response.body).toBeTruthy();
  });

  it('should transfer certificate', async () => {
    let response = await login(app);
    const accessToken = response.body.accessToken;
    const availableCertificates = await request(app.getHttpServer())
      .get('/carbon')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    response = await request(app.getHttpServer())
      .post('/carbon')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        id: availableCertificates[0].id,
      })
      .expect(200);

    expect(response.body).toBeTruthy();
  });

  afterAll(async () => {
    await tearDownDatabase();
    await app.close();
  });
});

async function login(app: INestApplication) {
  const response = await request(app.getHttpServer())
    .post('/auth')
    .send({
      email: 'userFirst@test.com',
      password: '111',
    })
    .expect(200);
  return response;
}
