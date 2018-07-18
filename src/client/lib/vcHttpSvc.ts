import * as request from "superagent";
import { JSONGeneric } from "./types/hub.d"


export class vcHttpSvc {

    public openVC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .post("/v1/vc/open")
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
    public updateVC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .put("/v1/vc/update")
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
    public closeVC( body:JSONGeneric ):Promise<JSONGeneric>{
        return new Promise<JSONGeneric>((resolve, reject) => {
            request
            .post("/v1/vc/close")
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



