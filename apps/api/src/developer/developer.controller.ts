import { Controller, Get } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {
  constructor(private developerService: DeveloperService) {}

  @Get()
  index() {
    return (
      'hello, this is developer api, Our members have: ' +
      this.developerService.getDevelopers().join(', ')
    );
  }
}
