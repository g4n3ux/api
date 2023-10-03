import { Injectable } from '@nestjs/common';
import { CreateGlobalInput } from './dto/create-global.input';
import { UpdateGlobalInput } from './dto/update-global.input';

@Injectable()
export class GlobalsService {
  create(createGlobalInput: CreateGlobalInput) {
    return 'This action adds a new global';
  }

  findAll() {
    return `This action returns all globals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} global`;
  }

  update(id: number, updateGlobalInput: UpdateGlobalInput) {
    return `This action updates a #${id} global`;
  }

  remove(id: number) {
    return `This action removes a #${id} global`;
  }
}
