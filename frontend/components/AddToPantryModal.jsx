"use client"

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Camera, Plus } from "lucide-react";

const AddToPantryModal = ({isOpen, onClose, onSuccess}) => {
   const [activeTab, setActiveTab] = useState("scan");
   const [selectedImage, setSelectedImage] = useState(null);
   const [scannedIngredients, setScannedIngredients] = useState([]);
   const [manuelItem, setManuelItem] = useState({name:"", quantity:""}); 

    const handleClose = () => {
        setActiveTab("scan");
        setSelectedImage(null);
        setScannedIngredients([]);
        setManuelItem({ name:"", quantity:""});
        onClose();
    };

    const handleAddManual = () => {};

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={handleClose} >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

           <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4" >
             <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="scan" className="gap-2">
                <Camera className="w-4 h-4"/>
                AI Scan
              </TabsTrigger>
              <TabsTrigger value="manual" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Manually
              </TabsTrigger>
             </TabsList>
             <TabsContent value="scan" className="space-y-6 mt-6">
               Make changes to your account here.
             </TabsContent>
             <TabsContent value="manual" className="mt-6">
               <form onSubmit={handleAddManual} className="space-y-4"></form>
              </TabsContent>
            </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddToPantryModal;
