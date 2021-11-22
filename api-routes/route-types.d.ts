import { Router } from 'express';

type RouteModuleWrapper = (app: Router) => void;
