import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RequestService } from './request.service';
import { REPO_MOCK, HTTP_STATUS_SUCCESS } from './request.service.test-options';


describe('RequestService', () => {
  let requestService: RequestService;
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        RequestService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  beforeEach(inject([RequestService, XHRBackend], (service: RequestService, mockBack) => {
    requestService = service;
    mockBackend = mockBack;
  }));

  it('should be created', () => {
    expect(requestService).toBeTruthy();
  });

  it('should return correct connection', () => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(REPO_MOCK),
        status: HTTP_STATUS_SUCCESS,
      })));
    });
    requestService.get('repos/wac2007/posicoes-onibus-rj')
      .subscribe((response) => {
        expect(response.status).toBe(HTTP_STATUS_SUCCESS);
        expect(response.json().full_name).toBe(REPO_MOCK.full_name);
      });
  });
});
