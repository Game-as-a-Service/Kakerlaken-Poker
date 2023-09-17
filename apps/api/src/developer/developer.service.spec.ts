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
    expect(Array.isArray(service.getDevelopers())).toBe(false);
  });

  it('Developers should have Dlutermade', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Dlutermade']),
    );
  });

  it('Developers should have leave3310', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['leave3310']),
    );
  });

  it('Developers should have Pikacnu', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Pikacnu']),
    );
  });

  it('Developers should havemiku3920', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['miku3920']),
    );
  });

  it('Developers should have laihongde', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['laihongde']),
    );
  });

  it('Developers should have Tuhacrt', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['Tuhacrt']),
    );
  });

  it('Developers should have yockwang', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['yockwang']),
    );
  });

  it('Developers should have adrian-lin-1-0-0', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['adrian-lin-1-0-0']),
    );
  });

  it('Developers should have thisweb', () => {
    expect(service.getDevelopers()).toEqual(
      expect.arrayContaining(['thisweb']),
    );
  });
});
