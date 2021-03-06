/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * and the Server Side Public License, v 1; you may not use this file except in
 * compliance with, at your election, the Elastic License or the Server Side
 * Public License, v 1.
 */

import { SavedObjectsClient } from './saved_objects_client';

test(`#create`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    create: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const attributes = Symbol();
  const options = Symbol();
  const result = await client.create(type, attributes, options);

  expect(mockRepository.create).toHaveBeenCalledWith(type, attributes, options);
  expect(result).toBe(returnValue);
});

test(`#checkConflicts`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    checkConflicts: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const objects = Symbol();
  const options = Symbol();
  const result = await client.checkConflicts(objects, options);

  expect(mockRepository.checkConflicts).toHaveBeenCalledWith(objects, options);
  expect(result).toBe(returnValue);
});

test(`#bulkCreate`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    bulkCreate: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const objects = Symbol();
  const options = Symbol();
  const result = await client.bulkCreate(objects, options);

  expect(mockRepository.bulkCreate).toHaveBeenCalledWith(objects, options);
  expect(result).toBe(returnValue);
});

test(`#delete`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    delete: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const options = Symbol();
  const result = await client.delete(type, id, options);

  expect(mockRepository.delete).toHaveBeenCalledWith(type, id, options);
  expect(result).toBe(returnValue);
});

test(`#find`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    find: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const options = Symbol();
  const result = await client.find(options);

  expect(mockRepository.find).toHaveBeenCalledWith(options);
  expect(result).toBe(returnValue);
});

test(`#bulkGet`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    bulkGet: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const objects = Symbol();
  const options = Symbol();
  const result = await client.bulkGet(objects, options);

  expect(mockRepository.bulkGet).toHaveBeenCalledWith(objects, options);
  expect(result).toBe(returnValue);
});

test(`#get`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    get: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const options = Symbol();
  const result = await client.get(type, id, options);

  expect(mockRepository.get).toHaveBeenCalledWith(type, id, options);
  expect(result).toBe(returnValue);
});

test(`#resolve`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    resolve: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const options = Symbol();
  const result = await client.resolve(type, id, options);

  expect(mockRepository.resolve).toHaveBeenCalledWith(type, id, options);
  expect(result).toBe(returnValue);
});

test(`#update`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    update: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const attributes = Symbol();
  const options = Symbol();
  const result = await client.update(type, id, attributes, options);

  expect(mockRepository.update).toHaveBeenCalledWith(type, id, attributes, options);
  expect(result).toBe(returnValue);
});

test(`#bulkUpdate`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    bulkUpdate: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const attributes = Symbol();
  const version = Symbol();
  const namespace = Symbol();
  const result = await client.bulkUpdate([{ type, id, attributes, version }], { namespace });

  expect(mockRepository.bulkUpdate).toHaveBeenCalledWith([{ type, id, attributes, version }], {
    namespace,
  });
  expect(result).toBe(returnValue);
});

test(`#addToNamespaces`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    addToNamespaces: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const namespaces = Symbol();
  const options = Symbol();
  const result = await client.addToNamespaces(type, id, namespaces, options);

  expect(mockRepository.addToNamespaces).toHaveBeenCalledWith(type, id, namespaces, options);
  expect(result).toBe(returnValue);
});

test(`#deleteFromNamespaces`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    deleteFromNamespaces: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const namespaces = Symbol();
  const options = Symbol();
  const result = await client.deleteFromNamespaces(type, id, namespaces, options);

  expect(mockRepository.deleteFromNamespaces).toHaveBeenCalledWith(type, id, namespaces, options);
  expect(result).toBe(returnValue);
});

test(`#removeReferencesTo`, async () => {
  const returnValue = Symbol();
  const mockRepository = {
    removeReferencesTo: jest.fn().mockResolvedValue(returnValue),
  };
  const client = new SavedObjectsClient(mockRepository);

  const type = Symbol();
  const id = Symbol();
  const options = Symbol();
  const result = await client.removeReferencesTo(type, id, options);

  expect(mockRepository.removeReferencesTo).toHaveBeenCalledWith(type, id, options);
  expect(result).toBe(returnValue);
});
