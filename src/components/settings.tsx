import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [voiceTips, setVoiceTips] = useState(true);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">Get alerts for missions, rewards and clan activity</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">Voice Tips</p>
                <p className="text-sm text-muted-foreground">Enable audio guidance in your preferred language</p>
              </div>
              <Switch checked={voiceTips} onCheckedChange={setVoiceTips} />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">Data-Saving Mode</p>
                <p className="text-sm text-muted-foreground">Lower data usage for rural connectivity</p>
              </div>
              <Switch />
            </div>

            <div className="pt-2">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};