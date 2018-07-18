import * as request from "superagent";
import { JSONGeneric } from "./types/hub.d"


export class lcHttpSvc {

    public openLC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .post("/v1/lc/open")
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as JSONGeneric);
                }
            });
        });
    }    
    public updateLC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .put("/v1/lc/update")
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as JSONGeneric);
                }
            });
        });
    }    
    public closeLC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .post("/v1/lc/close")
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as JSONGeneric);
                }
            });
        });
    }    
}



