import { ApiResponse } from "../helper/ApiResponse.js";
import { asyncHandler } from "../helper/AsyncHandler.js";

export const verifyWebhook = asyncHandler(async (req: any, res: any) => {
  try {
    const verifyToken = process.env.VERIFY_TOKEN;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === verifyToken) {
      console.log("WEBHOOK_VERIFIED");
      res
        .status(200)
        .json(new ApiResponse(200, challenge, "Webhook verified.", true));
    } else {
      res.status(403).json(new ApiResponse(403, [], "Token invalid.", false));
    }
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          [],
          "Something went wrong while verifying token.",
          false
        )
      );
  }
});

export const getWebhook = asyncHandler(async (req: any, res: any) => {
  try {
    const body = req.body;
    let senderPSID: string = "";
    if (body.object === "page") {
      body.entry.forEach((entry: any) => {
        const webhookEvent = entry.messaging[0];
        senderPSID = webhookEvent.sender.id;
      });
      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            senderPSID,
            "Successfully got PSID with webhook event.",
            true
          )
        );
    } else {
      res
        .status(404)
        .json(
          new ApiResponse(
            404,
            [],
            "Webhook event is not from a page subscription.",
            true
          )
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ApiResponse(500, [], "Error receiving webhook events.", false));
  }
});