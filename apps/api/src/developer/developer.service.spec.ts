import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperService } from './developer.service';

describe('DeveloperService', () => {
  let service: DeveloperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperService],
    }).compile();

    service = module.get<DeveloperService>(DeveloperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Developers should be array', () => {
    expectTypeOf(service.getDevelopers()).toBeArray();
  });

  it('Developers should be has Dlutermade', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Dlutermade']),
    );
  });

  it('Developers should be has leave3310', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['leave3310']),
    );
  });

  it('Developers should be has Pikacnu', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Pikacnu']),
    );
  });

  it('Developers should be has miku3920', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['miku3920']),
    );
  });

  it('Developers should be has laihongde', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['laihongde']),
    );
  });

  it('Developers should be has Tuhacrt', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Tuhacrt']),
    );
  });

  it('Developers should be has yockwang', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['yockwang']),
    );
  });
});
