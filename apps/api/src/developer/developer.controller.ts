import { Controller } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {
  constructor(private developerService: DeveloperService) {}
}
