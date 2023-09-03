import { Injectable } from '@nestjs/common';

@Injectable()
export class DeveloperService {
  getDevelopers() {
    return ['Dlutermade', 'leave3310', 'Pikacnu', 'miku3920'];
  }
}
