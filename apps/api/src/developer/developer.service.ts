import { Injectable } from '@nestjs/common';

@Injectable()
export class DeveloperService {
  getDevelopers() {
    return ['Dlutermade'];
  }
}
